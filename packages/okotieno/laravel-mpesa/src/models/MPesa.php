<?php

namespace Okotieno\MPesa\Models;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class MPesa
{

    private $accessToken;
    private $accessTokenExpiresIn;
    private $accessKeySetAt;
    /**
     * @var mixed
     */
    private $appConsumerKey;
    /**
     * @var mixed
     */
    private $appConsumerSecret;
    /**
     * @var mixed
     */
    private $lipaNaMpesaShortCode;
    /**
     * @var string
     */
    private $queueResultUrl;
    /**
     * @var string
     */
    private $queueTimeOutUrl;
    private $timeStamp;
    /**
     * @var mixed
     */
    private $partyA;
    /**
     * @var string
     */
    private $callbackUrl;
    /**
     * @var mixed
     */
    private $passKey;
    /**
     * @var mixed
     */
    private $businessShortCode;
    /**
     * @var mixed
     */
    private $partyB;
    /**
     * @var mixed
     */
    private $phoneNumber;
    /**
     * @var mixed
     */
    private $amount;
    /**
     * @var string
     */
    private $balanceInquiryResultUrl;

    public function getAccessToken()
    {
        return [
            'access_token' => $this->accessToken,
            'expires_in' => $this->accessTokenExpiresIn,
            'access_key_set_at' => $this->accessKeySetAt
        ];
    }

    public function __construct($config = [])
    {
        $this->appConsumerKey = env('MPESA_APP_CONSUMER_KEY');
        $this->appConsumerSecret = env('MPESA_APP_CONSUMER_SECRET');
        $this->lipaNaMpesaShortCode = env("MPESA_LIPA_NA_MPESA_SHORTCODE1");
        $this->queueTimeOutUrl = env("APP_URL") . '/api/m-pesa/time-out-url';
        $this->queueResultUrl = env("APP_URL") . '/api/m-pesa/result-url';
        $this->balanceInquiryResultUrl = env("APP_URL") . '/api/m-pesa/balance-inquiry-result-url';
        $this->callbackUrl = env("APP_URL") . '/api/m-pesa/callback-url';
        $this->passKey = env("MPESA_LIPA_NA_MPESA_PASSKEY");
        $this->timeStamp = now()->format('Ymdhis');

        if (key_exists('Amount', $config)) {
            $this->amount = $config['Amount'];
        }
        if (key_exists('PhoneNumber', $config)) {
            $this->partyA = $config['PhoneNumber'];
            $this->phoneNumber = $config['PhoneNumber'];
        }
        if (key_exists('TillNumber', $config)) {
            $this->partyB = $config['TillNumber'];
            $this->businessShortCode = $config['TillNumber'];
        }
        $this->setToken();
    }

    public function credentials()
    {
        return "$this->appConsumerKey:$this->appConsumerSecret";
    }

    public function setToken()
    {
        $url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';

        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        $credentials = base64_encode($this->credentials());
        curl_setopt($curl, CURLOPT_HTTPHEADER, array('Authorization: Basic ' . $credentials));
        curl_setopt($curl, CURLOPT_HEADER, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

        $this->accessKeySetAt = time();
        $curl_response = json_decode(curl_exec($curl), true);
        curl_close($curl);
        if (isset($curl_response['access_token'])) {
            $this->accessToken = $curl_response['access_token'];
            $this->accessTokenExpiresIn = $curl_response['expires_in'];
        } else {

        }

        return $curl_response;

    }

    public function getAccountBalance() {
        $url = 'https://sandbox.safaricom.co.ke/mpesa/accountbalance/v1/query';

        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type:application/json','Authorization:Bearer ACCESS_TOKEN')); //setting custom header


        $curl_post_data = array(
            'Initiator' => auth()->id(),
            'SecurityCredential' => Str::random('8'),
            'CommandID' => 'AccountBalance',
            'PartyA' => $this->partyA,
            'IdentifierType' => '4',
            'Remarks' => 'Balance Inquiry',
            'QueueTimeOutURL' => $this->queueResultUrl,
            'ResultURL' => $this->balanceInquiryResultUrl
        );

        $data_string = json_encode($curl_post_data);

        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data_string);

        $curl_response = curl_exec($curl);
        Log::info($curl_response);

        echo $curl_response;
    }

    public function lipaNaMPesa()
    {

        $url = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';

        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_HTTPHEADER,
            array('Content-Type:application/json', 'Authorization:Bearer ' . $this->accessToken)); //setting custom header

        $curl_post_data = array(
            'BusinessShortCode' => $this->businessShortCode,
            'Password' => base64_encode($this->partyB . $this->passKey . $this->timeStamp),
            'Timestamp' => $this->timeStamp,
            'TransactionType' => 'CustomerPayBillOnline',
            'Amount' => $this->amount,
            'PartyA' => $this->partyA,
            'PartyB' => $this->partyB,
            'PhoneNumber' => $this->phoneNumber,
            'CallBackURL' => $this->callbackUrl,
            'AccountReference' => 'account',
            'TransactionDesc' => 'test'
        );
//        return [$curl_post_data, $this->accessToken];
        $data_string = json_encode($curl_post_data);

        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data_string);

        $curl_response = json_decode(curl_exec($curl));

        MPesaPaymentRequest::create([
            'checkout_request_id' => $curl_response['CheckoutRequestID'],
            'merchant_request_id' =>$curl_response['MerchantRequestId']
        ]);

        return $curl_response;
    }

    public static function callback($request) {

        if (key_exists('Body', $request)) {
            $res = $request['Body']['stkCallback'];
            if ($res['ResultCode'] == 0) {
                $transactionDetails = [];
                foreach ($res['CallbackMetadata']['Item'] as $parameter ) {
                    $value = null;
                    if(key_exists('Value', $parameter)) {
                        $value = $parameter['Value'];
                    }
                    $transactionDetails[$parameter['Name']] = $value;
                }
                $mPesaPayment = MPesaPayment::create([
                    'trans_receipt' => $transactionDetails['MpesaReceiptNumber'],
                    'trans_time' => $transactionDetails['TransactionDate'],
                    'trans_amount' => $transactionDetails['Amount'],
                    'phone_number' => $transactionDetails['PhoneNumber'],

                ]);
                return [
                    'saved' => true,
                    'message' => $res['ResultDesc'],
                    'data' => $mPesaPayment,
                ];
            }
        }

//        if (key_exists('Result', $request)) {
//            $res = $request['Result'];
//            if ($res['ResultCode'] == 0) {
//                $transactionDetails = [];
//                foreach ($res['ResultParameters']['ResultParameter'] as $parameter ) {
//                    $transactionDetails[$parameter['Key']] = $parameter['Value'];
//                }
//                $mPesaPayment = MPesaPayment::create([
//                    'trans_id' => $res['TransactionID'],
//                    'trans_time' => $transactionDetails['TransactionCompletedDateTime'],
//                    'trans_amount' => $transactionDetails['TransactionAmount'],
//                    'conversion_id' => $res['ConversationID'],
//                    'originator_conversion_id' => $res['OriginatorConversationID'],
//                    'tran_receipt' => $transactionDetails['TransactionReceipt'],
//                    'receiver_party' => $transactionDetails['ReceiverPartyPublicName'],
//                    'utility_account_available_funds' => $transactionDetails['B2CUtilityAccountAvailableFunds'],
//                    'working_account_available_funds' => $transactionDetails['B2CWorkingAccountAvailableFunds'],
//                    'customer_is_registered' => $transactionDetails['B2CRecipientIsRegisteredCustomer'] == 'Y',
//                    'charges_paid' => $transactionDetails['B2CChargesPaidAccountAvailableFunds'],
//
//                ]);
//                return [
//                    'saved' => true,
//                    'message' => $res['ResultDesc'],
//                    'data' => $mPesaPayment,
//                ];
//            }
//
//            abort(500, $res['ResultDesc']);
//        }


    }
}

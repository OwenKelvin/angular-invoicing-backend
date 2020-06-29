<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <title>Password Reset</title>
</head>
<body>
<div class="container">
    <h2>Hello {{ $name }}!</h2>

    <p>
        You recently requested for a password reset for your Furaha Sales Management Account, {{ $school_name }}
    </p>
    <button id="copyToken" type="button" class="btn btn-primary">Copy Token</button>
    <p>If you did not request a password reset, no further action is required.</p>
    <script>
        const tokenElement = document.querySelector('#copyToken');
        tokenElement.addEventListener('click', ()=> {
            navigator.clipboard.writeText('{{ $reset_link }}');
            tokenElement.innerHTML = 'Copied!';
            tokenElement.classList.remove('btn-primary')
            tokenElement.classList.add('btn-success')
        })
    </script>
    <p>Regards,<br>
        Admissions<br>
        {{ $school_name }}</p>

    <p>
        If you are having trouble clicking the "Copy Token" button, copy the token below:
        <span class="bagde badge-secondary">{{ $reset_link }}</span>
    </p>
    <p>Regards</p>
    <img src="{{ asset('/img/logo-2@2x.png') }}" alt="Logo">
</div>


</body>
</html>

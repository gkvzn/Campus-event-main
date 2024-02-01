<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Email Verification | {{ env('APP_NAME') }}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>

<body>
    <table width="100%" bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" style="padding:0;margin:0;border:0">
        <tbody class="shadow-lg">
            <tr>
                <td align="left" style="padding:32px 63px 0 63px" id="m_2406260033209589578main-pad">
                    <a href="https://brandlogos.net/wp-content/uploads/2017/03/abu-dhabi-logo.png" target="_blank"
                        data-saferedirecturl="https://www.google.com/url?q=https://mega.nz/&amp;source=gmail&amp;ust=1685607984908000&amp;usg=AOvVaw3CKf9UPKmmYjBCCZTnyk1r">
                        <img alt="" src="https://brandlogos.net/wp-content/uploads/2017/03/abu-dhabi-logo.png" width="136"
                            data-image-whitelisted="" class="CToWUd" data-bit="iit"></a>
                    <h1
                        style="font-family:Helvetica,Arial,sans-serif;font-size:24px;line-height:31px;color:#777777;padding:0;margin:28px 0 32px 0;font-weight:400;text-align:left;text-decoration:none">
                        <a href="https://brandlogos.net/wp-content/uploads/2017/03/abu-dhabi-logo.png" style="text-decoration:none;color:#777777" target="_blank"
                            data-saferedirecturl="https://www.google.com/url?q=https://mega.nz/&amp;source=gmail&amp;ust=1685607984908000&amp;usg=AOvVaw3CKf9UPKmmYjBCCZTnyk1r"><span
                                style="display:block"> {{ $details['email'] }} </span></a>
                    </h1>
                    <p>Dear: {{ $details['email'] }} </p>
                    <p
                        style="font-size:16px;line-height:20px;color:#333333;padding:0;margin:0 0 33px 0;text-align:left;font-family:Helvetica,Arial,sans-serif">
                        Welcome to Al Abu Dhabi! We are thrilled to have you join our community. we kindly ask you to confirm your account. To
                        complete the verification process, simply enter below OTP code:
                    </p>

                    <table cellpadding="0" cellspacing="0" style="padding:0;margin:0;border:0;width:213px">
                        <tbody>
                            <tr>
                                <td id="m_2406260033209589578bottom-button-bg" valign="top" align="center"
                                    style="border-radius:3px;padding:12px 20px 16px 20px;background-color:#902813">
                                    <a id="m_2406260033209589578bottom-button"
                                        style="font-family:Helvetica,Arial,sans-serif;font-size:16px;color:#ffffff;background-color:#902813;border-radius:3px;text-align:center;text-decoration:none;display:block;margin:0">
                                        {{ $details['verify'] }}
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>


                </td>
            </tr>

            <tr>
                <td align="left" style="padding:32px 63px 0 63px" id="m_2406260033209589578main-pad">
                    <p
                        style="margin-top:25px !important; font-size:16px;line-height:20px;color:#333333;padding:0;margin:0 0 33px 0;text-align:left;font-family:Helvetica,Arial,sans-serif">
                        By confirming your account, you will gain full access to our wide range of delectable products,
                        exclusive offers, and personalized recommendations.

                    </p>
                </td>

            </tr>
            <tr>
                <td align="left" style="padding-top:12px; padding-left:63px; padding-bottom:12px"
                    id="m_2406260033209589578main-pad">
                    <p
                        style="font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:20px;color:#333333;padding:0;margin:35px 0 0 0;text-align:left">
                        Best regards,<br><br>Al Abu Dhabi Support Team
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
</body>

</html>

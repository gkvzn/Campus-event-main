<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Invoice</title>
    <style type="text/css">
        @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);

        * {
            box-sizing: border-box;
        }

        pre,
        p {
            padding: 0;
            margin: 0;
        }

        table {
            font-family: 'Open Sans', sans-serif;
            width: 100%;
            border-collapse: collapse;
            padding: 1px;
        }

        td,
        th {
            text-align: left;
        }

        .visibleMobile {
            display: none;
        }

        .hiddenMobile {
            display: block;
        }
    </style>
</head>

<body>

    <div style="width: 600px">


        {{-- header start --}}
        <table style="width: 100%; table-layout: fixed">
            <tr>

                <td colspan="4" align="left"
                    style="width: 300px; text-align: left; padding-left: 50px; line-height: 4; color: #323232;">
                    <p
                        style="font-size: 30px; font-family: 'Open Sans', sans-serif;font-weight: bold; color: #5b5b5b; line-height:2; vertical-align: top; ">
                        DogTvFoods Contact Us</p>
                    <p
                        style="font-size: 18px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; line-height: 24px; vertical-align: top;">
                        <b>Name</b>: {{ $details['first_name'] }} {{ $details['last_name'] }}
                        <br> <br>
                        <b>Email</b>: {{ $details['email'] }}
                        <br> <br>
                        <b>Phone Number</b>: {{ $details['phone'] }}
                        <br> <br>
                        <b>Message</b>:
                        <br><br>
                    <p style="font-size: 15px;line-height:1.5">
                        {{ $details['message'] }}
                    </p>
                    </p>
                </td>
            </tr>

        </table>
        {{-- header end --}}


        {{-- footer end --}}
    </div>

</body>

</html>

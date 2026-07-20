export const EMAIL_VERIFICATION_CODE = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Learnaxo Verification</title>
</head>

<body style="margin:0;padding:30px;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellspacing="0" cellpadding="0">
<tr>
<td align="center">

<table width="560" cellspacing="0" cellpadding="0"
style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 25px rgba(0,0,0,.08);">

<!-- Header -->
<tr>
<td align="center"
style="padding:40px;background:linear-gradient(135deg,#2563eb,#3b82f6);">

<h1 style="margin:0;color:#fff;font-size:34px;font-weight:bold;">
📚 Learnaxo
</h1>

<p style="margin-top:10px;color:#dbeafe;font-size:15px;">
Learn • Practice • Achieve
</p>

</td>
</tr>

<!-- Body -->
<tr>
<td style="padding:40px;">

<h2 style="margin:0;color:#111827;font-size:26px;">
Verify Your Email
</h2>

<p style="margin-top:18px;font-size:16px;color:#4b5563;line-height:1.8;">
Welcome to <strong>Learnaxo</strong> 👋
</p>

<p style="color:#6b7280;font-size:15px;line-height:1.8;">
Use the verification code below to complete your registration.
</p>

<!-- OTP Box -->
<table align="center" cellspacing="0" cellpadding="0"
style="margin:35px auto;">
<tr>
<td
style="background:#eff6ff;
border:2px dashed #2563eb;
padding:18px 35px;
border-radius:12px;
font-size:38px;
font-weight:bold;
letter-spacing:10px;
color:#2563eb;
text-align:center;">
{{OTP}}
</td>
</tr>
</table>

<!-- Security -->
<table width="100%" cellpadding="12"
style="background:#fff7ed;border:1px solid #fed7aa;border-radius:10px;margin-top:20px;">
<tr>
<td style="font-size:14px;color:#9a3412;">
🔒 Never share this OTP with anyone.
Learnaxo will never ask for your verification code.
</td>
</tr>
</table>

<hr style="margin:35px 0;border:none;border-top:1px solid #e5e7eb;">

<p style="font-size:14px;color:#6b7280;text-align:center;line-height:1.7;">
Didn't request this email?<br>
You can safely ignore it.
</p>

</td>
</tr>

<!-- Footer -->
<tr>
<td align="center"
style="padding:25px;background:#f9fafb;border-top:1px solid #e5e7eb;">

<p style="margin:0;font-size:14px;color:#374151;font-weight:bold;">
Learnaxo
</p>

<p style="margin:8px 0 0;color:#9ca3af;font-size:13px;">
Empowering Students Through Smart Learning
</p>

<p style="margin-top:18px;color:#9ca3af;font-size:12px;">
© 2026 Learnaxo. All rights reserved.
</p>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;

export const EMAIL_VERIFIED_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Registration Successful</title>
</head>

<body style="margin:0;padding:30px;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellspacing="0" cellpadding="0">
<tr>
<td align="center">

<table width="560" cellspacing="0" cellpadding="0"
style="background:#ffffff;border-radius:16px;overflow:hidden;">

<!-- Header -->
<tr>
<td align="center"
style="padding:40px;background:linear-gradient(135deg,#2563eb,#3b82f6);">

<h1 style="margin:0;color:#ffffff;font-size:32px;">
🎉 Learnaxo
</h1>

<p style="margin-top:10px;color:#dbeafe;font-size:15px;">
Registration Successful
</p>

</td>
</tr>

<!-- Body -->
<tr>
<td style="padding:40px;">

<div style="
width:70px;
height:70px;
background:#dcfce7;
border-radius:50%;
margin:0 auto 20px;
text-align:center;
line-height:70px;
font-size:34px;">
✅
</div>

<h2 style="margin:0;text-align:center;color:#111827;">
Welcome to Learnaxo!
</h2>

<p style="margin-top:20px;font-size:15px;color:#4b5563;line-height:1.8;text-align:center;">
Congratulations! 🎉 Your registration has been completed successfully and your email has been verified.
</p>

<div style="text-align:center;margin:35px 0;">
<a href="https://www.learnaxo.com"
style="
display:inline-block;
padding:14px 30px;
background:#2563eb;
color:#ffffff;
text-decoration:none;
font-weight:bold;
border-radius:8px;">
Explore Learnaxo
</a>
</div>

<hr style="margin:30px 0;border:none;border-top:1px solid #e5e7eb;">

<p style="font-size:14px;color:#6b7280;text-align:center;">
Thank you for choosing <strong>Learnaxo</strong>.<br>
We're excited to be part of your learning journey.
</p>

</td>
</tr>

<!-- Footer -->
<tr>
<td align="center"
style="padding:25px;background:#f9fafb;border-top:1px solid #e5e7eb;">

<p style="margin:0;color:#374151;font-weight:bold;">
Learnaxo
</p>

<p style="margin-top:8px;color:#9ca3af;font-size:13px;">
Learn • Practice • Achieve
</p>

<p style="margin-top:15px;color:#9ca3af;font-size:12px;">
© 2026 Learnaxo. All rights reserved.
</p>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;
export const RESEND_OTP_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Resend Verification Code</title>
</head>

<body style="margin:0;padding:30px;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellspacing="0" cellpadding="0">
<tr>
<td align="center">

<table width="560" cellspacing="0" cellpadding="0"
style="background:#ffffff;border-radius:16px;overflow:hidden;">

<!-- Header -->
<tr>
<td align="center"
style="padding:40px;background:linear-gradient(135deg,#2563eb,#3b82f6);">

<h1 style="margin:0;color:#ffffff;font-size:32px;">
📚 Learnaxo
</h1>

<p style="margin-top:10px;color:#dbeafe;font-size:15px;">
Email Verification
</p>

</td>
</tr>

<!-- Body -->
<tr>
<td style="padding:40px;">

<h2 style="margin:0;color:#111827;text-align:center;">
Your New Verification Code
</h2>

<p style="margin-top:20px;font-size:15px;color:#4b5563;line-height:1.8;text-align:center;">
As requested, we've generated a new verification code for your Learnaxo account.
</p>

<table align="center" cellpadding="0" cellspacing="0" style="margin:35px auto;">
<tr>
<td style="
background:#eff6ff;
border:2px dashed #2563eb;
border-radius:12px;
padding:18px 35px;
font-size:36px;
font-weight:bold;
letter-spacing:8px;
color:#2563eb;
text-align:center;">
{{OTP}}
</td>
</tr>
</table>

<div style="
margin-top:30px;
background:#fff7ed;
border:1px solid #fed7aa;
border-radius:10px;
padding:15px;">

<p style="margin:0;color:#9a3412;font-size:14px;">
🔒 Never share this verification code with anyone. Learnaxo will never ask for your OTP.
</p>

</div>

<hr style="margin:35px 0;border:none;border-top:1px solid #e5e7eb;">

<p style="text-align:center;color:#6b7280;font-size:14px;">
If you didn't request a new verification code, you can safely ignore this email.
</p>

</td>
</tr>

<!-- Footer -->
<tr>
<td align="center"
style="padding:25px;background:#f9fafb;border-top:1px solid #e5e7eb;">

<p style="margin:0;color:#374151;font-weight:bold;">
Learnaxo
</p>

<p style="margin-top:8px;color:#9ca3af;font-size:13px;">
Learn • Practice • Achieve
</p>

<p style="margin-top:15px;color:#9ca3af;font-size:12px;">
© 2026 Learnaxo. All rights reserved.
</p>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;
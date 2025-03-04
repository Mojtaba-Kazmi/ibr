import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      fullName,
      email,
      contactNumber,
      location,
      message,
      services, // Assuming services come as an array from the checkbox
    } = await request.json();

    // Validate required fields
    if (!fullName || !email || !contactNumber || !location || !message) {
      console.error("Missing fields in request");
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Create a transporter using Gmail SMTP settings
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use Gmail service
      host: "smtp.gmail.com", // Explicitly set SMTP host for Gmail
      port: 465, // SMTP SSL port
      secure: true, // true for SSL
      auth: {
        user: "info@innovatebathroomrenovations.com.au", // Your Google Workspace email address
        pass: process.env.EMAIL_PASSWORD, // Your email password or App Password
      },
    });

    // Email options
    const mailOptions = {
      from: "info@innovatebathroomrenovations.com.au", // Your email address
      replyTo: email, // Set the reply-to to the user's email address
      to: "info@innovatebathroomrenovations.com.au", // Your receiving email address
      subject: `New Quote Request from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0770B5; background-color: #f9fafb; padding: 20px; border-radius: 10px; border: 1px solid #e0e6ed;">
          <h2 style="color: #06A3D7; text-align: center; margin-bottom: 20px;">New Quote Request</h2>
          <p style="font-size: 16px; text-align: center; margin-bottom: 20px;">
            You have received a new quote request from your website. Please review the details below and follow up promptly.
          </p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <tr style="background-color: #0770B5; color: #ffffff;">
              <td style="padding: 15px; border: 1px solid #ddd; font-weight: bold;">Name</td>
              <td style="padding: 15px; border: 1px solid #ddd;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 15px; border: 1px solid #ddd; font-weight: bold;">Email</td>
              <td style="padding: 15px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr style="background-color: #f3f6fa;">
              <td style="padding: 15px; border: 1px solid #ddd; font-weight: bold;">Contact Number</td>
              <td style="padding: 15px; border: 1px solid #ddd;">${contactNumber}</td>
            </tr>
            <tr>
              <td style="padding: 15px; border: 1px solid #ddd; font-weight: bold;">Suburb</td>
              <td style="padding: 15px; border: 1px solid #ddd;">${location}</td>
            </tr>
            <tr style="background-color: #f3f6fa;">
              <td style="padding: 15px; border: 1px solid #ddd; font-weight: bold;">Interested Services</td>
              <td style="padding: 15px; border: 1px solid #ddd;">${services.join(
                ", "
              )}</td>
            </tr>
            <tr>
              <td style="padding: 15px; border: 1px solid #ddd; font-weight: bold;">Message</td>
              <td style="padding: 15px; border: 1px solid #ddd;">${message}</td>
            </tr>
          </table>
    
          <p style="margin-top: 20px; font-size: 16px; text-align: center; color: #333;">
            This is an important customer inquiry. Please respond to this request to provide a quote or further assistance.
          </p>
          <p style="text-align: center; color: #06A3D7; font-weight: bold; margin-top: 20px;">Best Regards,</p>
          <p style="text-align: center; color: #06A3D7;">Innovate Bathroom Renovations</p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}

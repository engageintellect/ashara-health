import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema
const contactSchema = z.object({
  name: z.string()
    .min(1, 'Full name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z.string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  phone: z.string()
    .min(1, 'Phone number is required')
    .regex(/^[\+]?[1-9][\d\s\-\(\)\.]{9,}$/, 'Please enter a valid phone number'),
  message: z.string()
    .min(1, 'Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validationResult = contactSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Validation failed',
          details: validationResult.error.format()
        },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = validationResult.data;

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    
    // For now, we'll simulate processing
    console.log('Contact form submission:', { name, email, phone, message });
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real implementation, you might:
    // - Send an email using a service like SendGrid, Resend, or Nodemailer
    // - Save to a database like PostgreSQL, MongoDB, or Supabase
    // - Send to a CRM like HubSpot or Salesforce
    
    return NextResponse.json(
      { 
        success: true,
        message: 'Message sent successfully! We\'ll get back to you soon.'
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: 'Failed to send message. Please try again later.'
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

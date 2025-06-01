import { NextResponse } from 'next/server';
import { initFirebaseAdminSDK } from '@/config/firebase-admin-config';

export async function GET() {
  try {
    // Initialize Firebase Admin SDK
    initFirebaseAdminSDK();
    
    // Placeholder for dashboard data
    const dashboardData = {
      totalUsers: 0,
      activeSessions: 0,
      totalRevenue: 0,
      activeProjects: 0,
      recentActivity: []
    };

    return NextResponse.json(dashboardData);
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard data' },
      { status: 500 }
    );
  }
}
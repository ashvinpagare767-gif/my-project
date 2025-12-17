import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
interface SummaryStat {
  label: string;
  value: string;
  icon: string;
  iconBg: string;
  trend: number;
}

interface ActivityItem {
  title: string;
  description: string;
  timeAgo: string;
}

interface PerformancePoint {
  label: string;
  value: number; // 0–100 for height percentage
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isSidebarCollapsed = false;
  searchQuery = '';

Highcharts: typeof Highcharts = Highcharts;
chartOptions: Highcharts.Options =  {
    chart: {
      type: 'column'
    },
    credits: {
     enabled: false
    },
    title: {
      text: 'Dummy Column Chart'
    },
    xAxis: {
      categories: ['A', 'B', 'C', 'D', 'E']
    },
    yAxis: {
      title: {
        text: 'Values'
      }
    },
    series: [
      {
        type: 'column',
        name: 'Sample Data',
        data: [5, 12, 8, 20, 15]
      }
    ]
  };
 
  currentYear = new Date().getFullYear();

  currentUser = {
    name: 'Ashvin Pagare'
  };

  summaryStats: SummaryStat[] = [
    {
      label: 'Total employees',
      value: '128',
      icon: 'fas fa-users',
      iconBg: 'bg-soft-primary',
      trend: 4.3
    },
    {
      label: 'New hires (30 days)',
      value: '12',
      icon: 'fas fa-user-plus',
      iconBg: 'bg-soft-success',
      trend: 8.1
    },
    {
      label: 'Leaves this month',
      value: '23',
      icon: 'far fa-calendar-alt',
      iconBg: 'bg-soft-warning',
      trend: -2.4
    },
    {
      label: 'Open positions',
      value: '5',
      icon: 'far fa-clipboard',
      iconBg: 'bg-soft-info',
      trend: 1.2
    }
  ];

  recentActivity: ActivityItem[] = [
    {
      title: 'New hire: Om Sharma',
      description: 'Joined Engineering as Senior Developer.',
      timeAgo: '2h ago'
    },
    {
      title: 'Leave approved',
      description: 'Annual leave for Rohan tilak (5 days).',
      timeAgo: '5h ago'
    },
    {
      title: 'Performance cycle started',
      description: 'Q4 performance review cycle started for all teams.',
      timeAgo: 'Yesterday'
    },
    {
      title: 'Policy updates',
      description: 'Updated remote work policy shared with all employees.',
      timeAgo: '2 days ago'
    }
  ];

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  
}

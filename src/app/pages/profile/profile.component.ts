import { Component } from '@angular/core';
import { USER_DATA } from '../../shared/user-data';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user = USER_DATA;

  technologies = [
    { name: 'Angular', bgColor: 'bg-blue-600', hoverColor: 'hover:bg-blue-700' },
    { name: 'TypeScript', bgColor: 'bg-teal-500', hoverColor: 'hover:bg-teal-600' },
    { name: 'JavaScript', bgColor: 'bg-yellow-500', hoverColor: 'hover:bg-yellow-600' },
    { name: 'Spring Boot', bgColor: 'bg-gray-800', hoverColor: 'hover:bg-gray-900' },
    { name: 'Firebase', bgColor: 'bg-red-500', hoverColor: 'hover:bg-red-600' },
    { name: 'Git & GitHub', bgColor: 'bg-purple-600', hoverColor: 'hover:bg-purple-700' },
    { name: 'SQL Server', bgColor: 'bg-blue-900', hoverColor: 'hover:bg-blue-950' },
    { name: 'MySQL', bgColor: 'bg-teal-700', hoverColor: 'hover:bg-teal-800' },
    { name: 'Node.js', bgColor: 'bg-green-700', hoverColor: 'hover:bg-green-800'},
    { name: 'Java', bgColor: 'bg-sky-500', hoverColor: 'hover:bg-sky-600'},
  ];
}

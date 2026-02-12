import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-eco-score',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './eco-score.component.html',
  styleUrls: ['./eco-score.component.css']
})
export class EcoScoreComponent {

  exampleScore = 85;

  criteria = [
    { icon: '♻️', title: 'Sustainable Materials', weight: 40, value: 90 },
    { icon: '🌍', title: 'Carbon Footprint', weight: 30, value: 80 },
    { icon: '🏭', title: 'Ethical Production', weight: 20, value: 85 },
    { icon: '📦', title: 'Eco Packaging', weight: 10, value: 70 }
  ];

  getScoreColor(score: number): string {
    if (score >= 80) return '#2d5016';
    if (score >= 60) return '#4caf50';
    return '#c62828';
  }
}

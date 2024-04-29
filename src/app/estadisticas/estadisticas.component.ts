import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';


@Component({
	selector: 'app-estadisticas',
	templateUrl: './estadisticas.component.html',
	styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit {

	public chart: Chart;

	ngOnInit(): void {
		const data = {
			labels: ["Lun", "Mar", "Mie", "Jue", "Vie"],
			datasets: [
				{
					label: 'Ingresos diarios',
					data: [65, 75, 75, 75, 60],
					fill: false,
					borderColor: 'rgb(255, 99, 132)',
					tension: 0.1
				},
				{
					label: 'Salidas diarias',
					data: [40, 45, 50, 60, 45],
					fill: false,
					borderColor: 'rgb(255, 205, 86)',
					tension: 0.1
				}
			]
		}

	
		this.chart = new Chart("chart", {
			type: 'line',
			data: data,
		})
	}

}

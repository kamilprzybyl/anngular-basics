import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Data, Prices } from '../chocolate/chocolate-interface';
import {
	Chart,
	ArcElement,
	LineElement,
	BarElement,
	PointElement,
	BarController,
	BubbleController,
	DoughnutController,
	LineController,
	PieController,
	PolarAreaController,
	RadarController,
	ScatterController,
	CategoryScale,
	LinearScale,
	LogarithmicScale,
	RadialLinearScale,
	TimeScale,
	TimeSeriesScale,
	Decimation,
	Filler,
	Legend,
	Title,
	Tooltip,
	SubTitle
  } from 'chart.js';

  Chart.register(
	ArcElement,
	LineElement,
	BarElement,
	PointElement,
	BarController,
	BubbleController,
	DoughnutController,
	LineController,
	PieController,
	PolarAreaController,
	RadarController,
	ScatterController,
	CategoryScale,
	LinearScale,
	LogarithmicScale,
	RadialLinearScale,
	TimeScale,
	TimeSeriesScale,
	Decimation,
	Filler,
	Legend,
	Title,
	Tooltip,
	SubTitle
  );

@Component({
	selector: 'app-chocolate-details',
	templateUrl: './chocolate-details.component.html',
	styleUrls: ['./chocolate-details.component.css']
})
export class ChocolateDetailsComponent implements OnInit {
	closeResult = '';
	@Input()
	data?: Data;

	constructor(private modalService: NgbModal) { }

	ngOnInit(): void {
		const nutrition = new Chart("nutrition", {
			type: 'pie',
			data: {
				labels: ['Fat', 'Carbohydrates', 'Protein', 'Salt'],
				datasets: [{
					data: [
						this.data?.nutrition.fat.total,
						this.data?.nutrition.carbohydrates.total,
						this.data?.nutrition.protein,
						this.data?.nutrition.salt
					],
					backgroundColor: [
						'rgba(255, 2, 2, 0.8)',
						'rgba(255, 102, 2, 0.8)',
						'rgba(255, 171, 2, 0.8)',
						'rgba(255, 250, 2, 0.8)',
						
					],
					borderColor: [
						'rgba(255, 255, 255, 0.8)',
						'rgba(255, 255, 255, 0.8)',
						'rgba(255, 255, 255, 0.8)',
						'rgba(255, 255, 255, 0.8)',
					],
					borderWidth: 3
				}]
			},
		});
	}

	open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result: any) => {
			this.closeResult = `Closed with: ${result}`;
		}, (reason: any) => {
			this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

	getPricePer100(shop: Prices): number {
		let price: number = shop.price;
		let amount: number = shop.amount;
		if (shop.unit === 'kg') {
			amount = amount * 1000;
		}
		return price / amount * 100;
	}

	isCheapestShop(prices: Prices): boolean {
		const pricesPer100: number[] = [];
		this.data?.prices.forEach(item => {
			pricesPer100.push(this.getPricePer100(item));
		});
		let min: number = Math.min.apply(null, pricesPer100);
		if (this.getPricePer100(prices) <= min) {
			return true;
		}
		return false;
	}
}

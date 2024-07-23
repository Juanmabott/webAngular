import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import Flickity from 'flickity';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css']
})
export class CaruselComponent implements OnInit, OnDestroy {
  @ViewChild('carouselElement') carouselElement!: ElementRef;

  flickityInstance: Flickity | undefined;

  ngOnInit(): void {
    // Verificar que el elemento del DOM esté disponible antes de inicializar Flickity
    if (this.carouselElement) {
      this.flickityInstance = new Flickity(this.carouselElement.nativeElement, {
        cellAlign: 'left',
        contain: true
      });
    }
  }

  ngOnDestroy(): void {
    // Destruir la instancia de Flickity al destruir el componente para liberar recursos
    if (this.flickityInstance) {
      this.flickityInstance.destroy();
    }
  }
}

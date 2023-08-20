import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer:DomSanitizer ){ }

  transform( id: string): any {
    const url = 'https://open.spotify.com/embed/track/';
    const url2 = '?utm_source=generator&theme=0';
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + id + url2 );
  }

}

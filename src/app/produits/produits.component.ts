import { Component,OnInit} from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',

})
export class ProduitsComponent implements OnInit{

  produits? : Produit[];
  
  // private ProduitService= new ProduitService();
  constructor(private ProduitService:ProduitService) {
    // this.produits=[];
    // this.produits = ProduitService.listeProduit();
    }

    ngOnInit():void{
      this.produits = this.ProduitService.listeProduit();
    }
    supprimerProduit(prod :Produit)
    {
      console.log(prod);
      let conf = confirm("Etes-vous sûr ?");
       if (conf)
      this.ProduitService.supprimerProduit(prod);
      
    }
}



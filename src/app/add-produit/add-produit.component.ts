import { Component,OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';
@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  
})
export class AddProduitComponent implements OnInit {

  newProduit = new Produit();
  categories! : Categorie[];
  newIdCat! : number;
  newCategorie! : Categorie;
  message : String ='';

  constructor(private ProduitService : ProduitService , private router: Router){}
  ngOnInit(): void {
    this.categories = this.ProduitService.listeCategories();
  }
  addProduit(){
    this.newCategorie =this.ProduitService.consulterCategorie(this.newIdCat);
this.newProduit.categorie = this.newCategorie;
    // console.log(this.newProduit);
    this.ProduitService.ajouterProduit(this.newProduit);
    // this.message="produit "+this.newProduit.nomProduit +"ajouter avec succes ! ";
    this.router.navigate(["produits"])
    }
    
}

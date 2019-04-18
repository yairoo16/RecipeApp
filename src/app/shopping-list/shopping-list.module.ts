import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list.component';
import { NgModule } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class ShoppingListModule {}

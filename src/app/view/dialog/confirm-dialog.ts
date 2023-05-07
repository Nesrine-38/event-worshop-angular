import { Component, Inject } from "@angular/core";
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
    selector:"confirmDialog",
    templateUrl:'./confirm-dialog.html'
})

export class ConfirmDialogComponent
{

    constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>){}            

    dismissDialog(confirm:boolean)
    {
        this.dialogRef.close({confirm})
    }

}
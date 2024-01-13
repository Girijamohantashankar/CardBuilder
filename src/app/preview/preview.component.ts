import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { VisitingCardService } from '../card-form/visiting-card.service';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
})
export class PreviewComponent implements OnInit {
  visitingCardData: any;

  constructor(private visitingCardService: VisitingCardService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.visitingCardService.visitingCardData$.subscribe((data) => {
      console.log('Received data in preview component:', data);
      this.visitingCardData = data;
      this.cdr.detectChanges();
    });
  }

  generatePDF() {
    if (this.visitingCardData) {
      const docDefinition: any = {  
        content: [
          { text: 'Company Name: ' + this.visitingCardData.companyName, style: ['header', 'underline' ]},
          { text: 'Full Name: ' + this.visitingCardData.fullName, style: 'subheader' },
          { text: 'Email: ' + this.visitingCardData.email, style: 'subheader' },
          { text: 'Phone Number: ' + this.visitingCardData.phoneNumber, style: 'subheader' },
          { text: 'Designation: ' + this.visitingCardData.designation, style: 'subheader' },
         
        ],
        styles: {
          header: {
            fontSize: 20,
            bold: true,
            color: 'blue',
            alignment: 'center',
            margin: [0, 20, 40, 0],
          },
          subheader: {
            fontSize: 14,
            color: 'black',
            alignment: 'center',
            margin: [0, 5, 20, 0],
          },
          underline: {
            decoration: 'underline',
            
          }
        },
      };

      pdfMake.createPdf(docDefinition).download('visiting_card_preview.pdf');
    } else {
      console.warn('No data available to generate PDF.');
    }
  }
}

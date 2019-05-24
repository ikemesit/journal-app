import { Component, Input, OnInit } from '@angular/core';

export class Publication {
  title: string;
  subTitle: string;
  tags: string[];
  image: string;
}

@Component({
  selector: 'jr-publication-card-row',
  templateUrl: './publication-card-row.component.html',
  styleUrls: ['./publication-card-row.component.scss'],
})
export class PublicationCardRowComponent implements OnInit {
  @Input()
  rowCount: number;
  fakePubs = [
    {
      title:
        'Utilisation Patterns Of Information Sources In Pharmacy Library Of University Of Uyo',
      subTitle: 'Vol. 1 Number 1',
      tags: [
        'Utilisation patterns',
        'Library use',
        'Pharmacy libraries',
        'Pharmacy information sources and use',
      ],
      image: '../../../../assets/images/pharma1.png',
    },
    {
      title:
        'Impact Of Rutile Mining On Water Quality In Mogbwemo, Southwestern Sierra Leone',
      subTitle: 'R. A. D. Frazer-williams, F. Thullah And N. C. Pratt',
      tags: ['Chemical speciation', 'heavy metals', 'pollution', 'sediment'],
      image: '../../../../assets/images/africa-water.jpg',
    },
    // {
    //   title: `Evaluation Of Antioxidant Activity And Chemical Analysis Of The Leaf Of Telfairia
    //   Occidentalis`,
    //   subTitle: 'Nkereuwem, A. O., Eseyin, O. A., Udobre S. A. And Ebong, A.',
    //   tags: [
    //     'Antioxidants',
    //     'DPPH',
    //     'free radical scavenging activity',
    //     'flavoniods',
    //   ],
    // },
    // {
    //   title: `Evaluation Of Antioxidant Activity And Chemical Analysis Of The Leaf Of Telfairia
    //   Occidentalis`,
    //   subTitle: 'Nkereuwem, A. O., Eseyin, O. A., Udobre S. A. And Ebong, A.',
    //   tags: [
    //     'Antioxidants',
    //     'DPPH',
    //     'free radical scavenging activity',
    //     'flavoniods',
    //   ],
    // },
    // {
    //   title: `Effects Of Artemether On The Pharmacokinetic Parameters Of Quinine In Wistar Rats`,
    //   subTitle: 'Vol. 1 Number 1',
    //   tags: ['Quinine', 'Artemether', 'Pharmacokinetic parameters'],
    // },
  ];

  publications: Publication[] = [];

  constructor() {}

  ngOnInit() {
    for (const publication of this.fakePubs) {
      const pub = new Publication();
      pub.title = publication.title;
      pub.subTitle = publication.subTitle;
      pub.tags = [...publication.tags];
      pub.image = publication.image;
      this.publications.push(pub);
    }
  }
}

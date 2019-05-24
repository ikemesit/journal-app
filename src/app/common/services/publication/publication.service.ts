import { Injectable } from '@angular/core';

@Injectable()
export class PublicationService {
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
    },
    {
      title:
        'Impact Of Rutile Mining On Water Quality In Mogbwemo, Southwestern Sierra Leone',
      subTitle: 'R. A. D. Frazer-williams, F. Thullah And N. C. Pratt',
      tags: ['Chemical speciation', 'heavy metals', 'pollution', 'sediment'],
    },
    {
      title: `Evaluation Of Antioxidant Activity And Chemical Analysis Of The Leaf Of Telfairia
      Occidentalis`,
      subTitle: 'Nkereuwem, A. O., Eseyin, O. A., Udobre S. A. And Ebong, A.',
      tags: [
        'Antioxidants',
        'DPPH',
        'free radical scavenging activity',
        'flavoniods',
      ],
    },
    {
      title: `Evaluation Of Antioxidant Activity And Chemical Analysis Of The Leaf Of Telfairia
      Occidentalis`,
      subTitle: 'Nkereuwem, A. O., Eseyin, O. A., Udobre S. A. And Ebong, A.',
      tags: [
        'Antioxidants',
        'DPPH',
        'free radical scavenging activity',
        'flavoniods',
      ],
    },
    {
      title: `Effects Of Artemether On The Pharmacokinetic Parameters Of Quinine In Wistar Rats`,
      subTitle: 'Vol. 1 Number 1',
      tags: ['Quinine', 'Artemether', 'Pharmacokinetic parameters'],
    },
  ];
  constructor() {}
}

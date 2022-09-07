import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  public staffing=[
    {
      Id:1,
      Name:'official'
    },
    {
      Id:2,
      Name:'shadow'
    }
  ]

  public role=[
    {
      Id:1,
      Name:'UI'
    },
    {
      Id:2,
      Name:'Frontend'
    },
    {
      Id:3,
      Name:'Mean'
    },
  ]

  public frameworkTool=[
    {
      Id:1,
      Name:'React'
    },
    {
      Id:2,
      Name:'Angular'
    },
    {
      Id:3,
      Name:'vue'
    }
  ]

  public status=[
    {
      Id:1,
      Name:'Hold'
    },
    {
      Id:2,
      Name:'In progress'
    },
    {
      Id:3,
      Name:'Yet to start'
    },
    {
      Id:4,
      Name:'Closed'
    },
  ]

  public cssFramework=[
    {
      Id:1,
      Name:'Bootstrap'
    },
    {
      Id:2,
      Name:'Tailwind'
    },
  ]
  public bill=[
    {
      Id:1,
      Name:'Billable'
    },
    {
      Id:2,
      Name:'Non-Billable'
    }
  ]

  constructor() { }
}

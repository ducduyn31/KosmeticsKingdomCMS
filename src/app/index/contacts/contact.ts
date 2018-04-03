export class Contact {

  constructor(public _id: string, public name: string, public email: string, public title: string, public description: string, public attachment: {__v: number, _id: string, destination: string, filename: string, originalName: string, size: number}[], public tel?: string, public company?: string) {
  }
}

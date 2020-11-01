import Image from '../models/Images'
export default{
  render(image: Image) {
    return {
      id: image.id,
     // url: `http://localhost:3333/uploads/${image.path}`,
      url: `http://10.0.0.114:3333/uploads/${image.path}`,
    };
  },

  renderMany(image: Image[]) {
    return image.map(image => this.render(image));
  }
}
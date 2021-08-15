class BaseService {
  constructor(model) {
    this.model = model;
  }
  async insert(object) {
    return await this.model.create(object);
  }
  async find(id) {
    return this.model.findById(id);
  }
  async findAll() {
    return this.model.find();
  }
}

module.exports = BaseService;

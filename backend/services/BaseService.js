class BaseService {
  constructor(model) {
    this.model = model;
  }
  async insert(object) {
    return await this.model.create(object);
  }
  async findOne(id) {
    return this.model.findById(id);
  }
  async findAll() {
    return this.model.find();
  }
}

module.exports = BaseService;

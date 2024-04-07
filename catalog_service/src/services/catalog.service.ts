import { ICatalogRepository } from "../interface/catalogRepository.interface";

// here we write our business logic.
export class CatalogService {
  private _repository: ICatalogRepository;
  constructor(repository: ICatalogRepository) {
    this._repository = repository;
  }

  createProduct(input: any) {}
  
  updateProduct(input: any) {}

  getProducts(limit: number, offset: number) {}

  getProduct(id: number) {}

  deleteProduct(id: number) {}
}

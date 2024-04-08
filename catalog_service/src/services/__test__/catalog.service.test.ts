import { ICatalogRepository } from "../../interface/catalogRepository.interface"
import { MockCatalogRepository } from "../../repository/mockCatalog.repository"
import { CatalogService } from "../catalog.service"

describe("catalogService", () => {

    let repository: ICatalogRepository
    beforeEach(() => {
        repository = new MockCatalogRepository()
    })

    afterEach(() => {
        repository = {} as MockCatalogRepository;
    })

    describe("createProduct", () => {

        test("should create product", async () => {
            const service = new CatalogService(repository);
            const result = await service.createProduct({})
            expect(result).toMatchObject({
                id: 1,
                name: "",
                price: 0,
                stock: 1,
                description: ""
            })
        })

        test("should throw error with product already exist", () => {

        })


    })
})
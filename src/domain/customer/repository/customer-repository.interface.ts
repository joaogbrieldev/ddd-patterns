import RepositoryInterface from "../../@shared/repository/repository-interface";
import Customer from "../../entity/customer/customer";

export default interface CustomerRepositoryInterface
  extends RepositoryInterface<Customer> {}

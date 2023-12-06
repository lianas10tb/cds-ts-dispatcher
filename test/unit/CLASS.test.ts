import { type Constructable } from '@sap/cds/apis/internal/inference';
import { EntityHandler } from '../../lib';
import { Book } from '../bookshop/srv/util/types/entities/sap/capire/bookshop';
import { MetadataDispatcher } from '../../lib/util/helpers/MetadataDispatcher';

function customerBeforeCreateInstance(): Constructable {
  @EntityHandler(Book)
  class BookHandler {}
  return BookHandler;
}

describe('CLASS', () => {
  describe('@EntityHandler', () => {
    it('It should RETURN : the entity set in the MetadataDispatcher', () => {
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      const newInstance = (Customer: Constructable) => new Customer();
      const entity = MetadataDispatcher.getEntity(newInstance(customerBeforeCreateInstance()));

      expect(entity).toBeDefined();
    });
  });
});

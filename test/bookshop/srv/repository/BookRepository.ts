import { Repository } from '../../../../dist';
import { Book } from '../util/types/entities/CatalogService';
import { BaseRepository } from '@dxfrontier/cds-ts-repository';

@Repository()
class BookRepository extends BaseRepository<Book> {
  // ... define custom CDS-QL actions if BaseRepository ones are not satisfying your needs !
}

export default BookRepository;

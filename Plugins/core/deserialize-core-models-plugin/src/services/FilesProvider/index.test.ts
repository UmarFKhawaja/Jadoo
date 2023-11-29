import { File } from '@jadoo/core-library';
import { FilesProvider } from '.';

describe('FilesProvider', () => {
  it('provides files in the sourceDir', () => {
    const filesProvider: FilesProvider = new FilesProvider();

    const files: File[] = filesProvider.provide('../../../Examples');

    expect(files.length).toEqual(25);
    expect(files.map((file: File) => file.name).sort()).toEqual([
      '../../../Examples/Jadoo/Schemas/Account/Entities/Access/entity.yaml',
      '../../../Examples/Jadoo/Schemas/Account/Entities/Login/entity.yaml',
      '../../../Examples/Jadoo/Schemas/Account/Entities/Permission/entity.yaml',
      '../../../Examples/Jadoo/Schemas/Account/Entities/Profile/entity.yaml',
      '../../../Examples/Jadoo/Schemas/Account/Entities/Role/entity.yaml',
      '../../../Examples/Jadoo/Schemas/Account/Entities/User/entity.yaml',
      '../../../Examples/Jadoo/Schemas/Account/Enums/AccessType/enum.yaml',
      '../../../Examples/Jadoo/Schemas/Account/Enums/PermissionFlag/enum.yaml',
      '../../../Examples/Jadoo/Schemas/Account/Enums/ProviderName/enum.yaml',
      '../../../Examples/Jadoo/Schemas/Account/Enums/RoleFlag/enum.yaml',
      '../../../Examples/Jadoo/Schemas/Account/schema.yaml',
      '../../../Examples/Jadoo/Schemas/Asset/Entities/Attribute/entity.yaml',
      '../../../Examples/Jadoo/Schemas/Asset/Entities/Entity/entity.yaml',
      '../../../Examples/Jadoo/Schemas/Asset/Entities/Enum/entity.yaml',
      '../../../Examples/Jadoo/Schemas/Asset/Entities/Reference/entity.yaml',
      '../../../Examples/Jadoo/Schemas/Asset/Entities/Schema/entity.yaml',
      '../../../Examples/Jadoo/Schemas/Asset/Entities/Value/entity.yaml',
      '../../../Examples/Jadoo/Schemas/Asset/schema.yaml',
      '../../../Examples/Jadoo/solution.yaml',
      '../../../Examples/Teesra/Schemas/Fubar/Entities/Fault/entity.yaml',
      '../../../Examples/Teesra/Schemas/Fubar/schema.yaml',
      '../../../Examples/Teesra/solution.yaml',
      '../../../Examples/Wrongun/Schemas/Fubar/Enums/Error/enum.yaml',
      '../../../Examples/Wrongun/Schemas/Fubar/schema.yaml',
      '../../../Examples/Wrongun/solution.yaml'
    ]);
  });
});

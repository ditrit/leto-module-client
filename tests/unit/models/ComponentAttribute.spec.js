import ComponentAttribute from 'src/models/ComponentAttribute';

describe('Test class: ComponentAttribute', () => {

  describe('Test constructor', () => {
    it('Check variable instantiation', () => {
      const componentAttribute = new ComponentAttribute();

      expect(componentAttribute.name).toBeNull();
      expect(componentAttribute.value).toBeNull();
    });

    it('Check passing variable to constructor', () => {
      const componentAttribute = new ComponentAttribute('name', 'value');

      expect(componentAttribute.name).toEqual('name');
      expect(componentAttribute.value).toEqual('value');
    });
  });
});
/**
 * @class Ext.data.schema.Reference
 *
 * **This is not a real JavaScript class and cannot be created. This is for documentation purposes
 * only.**
 *
 * This documentation is for:
 *
 * + {@link Ext.data.field.Field#reference reference config}
 *
 * The {@link Ext.data.Model#entityName name} of the entity referenced by this field.
 * In most databases, this relationship is represented by a "foreign key". That is, a
 * value for such a field matches the value of the {@link Ext.data.Model#idProperty id}
 * for an entity of this type.
 *
 *      Ext.define('MyApp.models.Organization', {
 *          extend: 'Ext.data.Model',
 *          ...
 *      });
 *
 *      Ext.define('MyApp.models.User', {
 *          extend: 'Ext.data.Model',
 *
 *          fields: [
 *              { name: 'organizationId', reference: 'Organization' }
 *          ],
 *          ...
 *      });
 *
 * If the name of the generated {@link Ext.data.schema.Association association} or other aspects
 * need to be specified, the `reference` can be an object. The following usage shows
 * what would be generated by default given the above examples using the string form.
 *
 *      Ext.define('MyApp.models.User', {
 *          extend: 'Ext.data.Model',
 *
 *          fields: [{
 *              name: 'organizationId',
 *              reference: {
 *                  type: 'Organization',
 *                  association: 'UsersByOrganization',
 *                  role: 'organization',
 *                  inverse: 'users'
 *              }
 *          }],
 *          ...
 *      });
 *
 * Finally, a `reference` can also describe ownership between the entities. By default,
 * no ownership relationship is assumed. If, however, the User entities are owned by
 * their Organization, we could say this:
 *
 *      Ext.define('MyApp.models.User', {
 *          extend: 'Ext.data.Model',
 *
 *          fields: [{
 *              name: 'organizationId',
 *              reference: {
 *                  parent: 'Organization' // Organization is the parent of User
 *              }
 *          }],
 *          ...
 *      });
 */

/**
 * @cfg {String} type
 * The type which this field references. This is the value set by the string form of
 * `reference`. If the referenced entity has an ownership relationship this field
 * should be omitted and `reference.parent` or `reference.child` should be specified
 * instead.
 */

/**
 * @cfg {String} association
 * The name of the association. By default, the name of the association is the
 * capitalized `inverse` plus "By" plus the capitalized `role`.
 */

/**
 * @cfg {String} child
 * Set this property instead of `reference.type` to indicate that the referenced entity
 * is an owned child of this entity. That is, the `reference` entity should be deleted
 * when this entity is deleted.
 */

/**
 * @cfg {String} parent
 * Set this property instead of `reference.type` to indicate that the referenced entity
 * is the owning parent of this entity. That is, this entity should be deleted when the
 * `reference` entity is deleted.
 *
 */

/**
 * @cfg {String} role
 * The name of the role played by the referenced entity. By default, this is the field
 * name (minus its "Id" suffix if present).
 */

/**
 * @cfg {String} [getterName] The name of the getter function. Typically this is generated
 * based on the {@link #role}.
 */

/**
 * @cfg {String} [setterName] The name of the setter function (if required). Typically this is
 * generated based on the {@link #role}.
 */

/**
 * @cfg {Object} [reader] A custom {@link Ext.data.reader.Reader} configuration for reading
 * nested data.
 */

/**
 * @cfg {Boolean} [unique] `true` True for this reference to create a `Ext.data.schema.OneToOne`
 * relationship. If not specified, the default is `Ext.data.schema.ManyToOne`.
 */

/**
 * @cfg {String/Object} inverse
 * The name of the inverse role (of this entity with respect to the `reference`
 * entity). By default, this is the {@link Ext.util.Inflector#pluralize pluralized}
 * name of this entity, unless this `reference` is `unique`, in which case the default
 * name is the {@link Ext.util.Inflector#singularize singularized} name of this entity.
 *
 * This config may also be an object containing a role, getter, or setter.
 */

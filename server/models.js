const Sequelize = require('sequelize');

const Database = require('./models');

const DB = Database.connectDb();

// =============================================================
// *                  MODEL DEFINITIONS                        *
// =============================================================

// User model
const User = DB.define('user', {
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  avatar: {
    type: Sequelize.STRING
  }
});

// Creating first user in database
// User.sync({force: true}).then(() => {
//   // Table created
//   return User.create({
//     name: 'John Doe',
//     description: 'A full-stack web designer & front-end developer.',
//     avatar: ''
//   });
// });

// Page model
const Page = DB.define('page', {
  title: {
    type: Sequelize.STRING
  },
  slug: {
    type: Sequelize.STRING
  }
});

// Template model
const Template = DB.define('template', {
  name: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  }
});

// Category model
const Category = DB.define('category', {
  name: {
    type: Sequelize.STRING
  },
  slug: {
    type: Sequelize.STRING
  }
});

// List model
const List = DB.define('list', {
  title: {
    type: Sequelize.STRING
  },
  slug: {
    type: Sequelize.STRING
  }
});

// Post model
const Post = DB.define('post', {
  title: {
    type: Sequelize.STRING
  },
  slug: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  }
});

// Tag model
const Tag = DB.define('tag', {
  name: {
    type: Sequelize.STRING
  },
  slug: {
    type: Sequelize.STRING
  }
});

// =============================================================
// *                    RELATIONSHIPS                          *
// =============================================================

// User-Page relationship
User.hasMany(Page);
Page.belongsTo(User);

// User-Post relationship
User.hasMany(Post);
Post.belongsTo(User);

// Page-Category relationship
Page.hasOne(Category);
Category.belongsToMany(Page);

// Page-Template relationship
Page.hasOne(Template);
Template.belongsToMany(Page);

// List-Template relationship
List.hasOne(Template);
Template.belongsToMany(List);

// List-Category relationship
List.hasOne(Category);
Category.belongsToMany(List);

// Post-Tag relationship
Post.hasMany(Tag);
Tag.belongsToMany(Post);

// Post-Category relationship
Post.hasMany(Category);
Category.belongsToMany(Post);

module.exports.user = User;
module.exports.page = Page;
module.exports.template = Template;
module.exports.taguser = Tag;
module.exports.list = List;
module.exports.category = Category;

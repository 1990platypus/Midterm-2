var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
  title: String,
  upvotes: {type: Number, default: 0},
});
ProductSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};
mongoose.model('Product', ProductSchema);

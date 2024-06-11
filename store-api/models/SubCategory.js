import { Schema } from 'mongoose' ;

const subCategorySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: [true, 'SubCategory must be unique'],
      minlength: [2, 'To short SubCategory name'],
      maxlength: [32, 'To long SubCategory name'],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
      required: [true, 'SubCategory must be belong to parent category'],
    },
  },
  { timestamps: true }
);

export default model('SubCategory', subCategorySchema);
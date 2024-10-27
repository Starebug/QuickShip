const transactionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Traveller's User reference
    products: [{
      sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Sender (user) reference
      items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }]  // Array of products from the sender
    }],
    requestDate: { type: Date, default: Date.now }
  });
  
const Transaction = mongoose.model('Transaction', transactionSchema);
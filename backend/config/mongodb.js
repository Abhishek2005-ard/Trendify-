import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    console.log("🔌 Connecting to:", process.env.MONGODB_URL); // <-- add this line
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

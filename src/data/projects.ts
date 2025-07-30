// Dummy project data for the portfolio
// In a real implementation, this would come from a CMS or API

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  tech: string[];
  image: string;
  notebooks?: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "fifa-clustering",
    title: "FIFA Player Clustering Analysis",
    description: "Advanced clustering of FIFA 20 players using PCA, K-Means, Spectral, and GMM algorithms with role-based analysis.",
    longDescription: "This comprehensive project analyzes FIFA 20 player data using multiple clustering techniques including K-Means, Spectral Clustering, and Gaussian Mixture Models. The analysis includes dimensionality reduction with PCA, interactive 3D visualizations, and detailed role-based player categorization. Key insights reveal distinct player archetypes and their statistical characteristics across different positions.",
    tags: ["ML", "Clustering", "Notebook"],
    tech: ["Python", "Scikit-learn", "Matplotlib", "Plotly", "Pandas"],
    image: "/project-images/fifa.jpg",
    notebooks: [
      "https://nbviewer.org/urls/raw.githubusercontent.com/adharshraj77/FIFA_Anlysis/main/FIFA_preprocessing_FeatureEngineering.ipynb",
      "https://nbviewer.org/urls/raw.githubusercontent.com/adharshraj77/FIFA_Anlysis/main/FIFA_EDAnlysis.ipynb",
      "https://nbviewer.org/urls/raw.githubusercontent.com/adharshraj77/FIFA_Anlysis/main/FIFA_Modeling_.ipynb"
      
    ],
    github: "https://github.com/adharshraj77/FIFA_Anlysis/tree/main",
    live: "https://fifa-cluster.streamlit.app",
    featured: true
  },
  {
    id: "sentiment-analysis",
    title: "Social Media Sentiment Analysis",
    description: "Real-time sentiment analysis of social media posts using BERT and transformer models.",
    longDescription: "A sophisticated NLP system that processes social media data in real-time to determine sentiment polarity. Uses pre-trained BERT models fine-tuned on social media data, with custom preprocessing pipelines for handling emojis, slang, and informal text. Includes deployment as a REST API and interactive dashboard.",
    tags: ["NLP", "DL", "Deployed"],
    tech: ["Python", "Transformers", "Flask", "React", "MongoDB"],
    image: "/project-images/sentiment.jpg",
    notebooks: [
      "https://nbviewer.org/urls/raw.githubusercontent.com/example/sentiment-training.ipynb"
    ],
    github: "https://github.com/example/sentiment-analysis",
    live: "https://sentiment-analyzer.vercel.app",
    featured: true
  },
  {
    id: "stock-prediction",
    title: "Stock Price Prediction LSTM",
    description: "Deep learning model using LSTM networks to predict stock prices with technical indicators.",
    longDescription: "Time series forecasting model built with LSTM neural networks to predict stock prices. Incorporates technical indicators, market sentiment data, and macroeconomic factors. Features ensemble methods combining multiple LSTM architectures and includes risk assessment metrics.",
    tags: ["DL", "Time Series", "Notebook"],
    tech: ["Python", "TensorFlow", "Keras", "yfinance", "Streamlit"],
    image: "/project-images/stock.jpg",
    notebooks: [
      "https://nbviewer.org/urls/raw.githubusercontent.com/adharshraj77/Stellar-Classification/main/Stellar_Classification.ipynb"
    ],
    github: "https://github.com/example/stock-prediction",
    live: "https://stock-predictor.streamlit.app"
  },
  {
    id: "object-detection",
    title: "Real-time Object Detection",
    description: "YOLOv5 implementation for real-time object detection with custom dataset training.",
    longDescription: "Custom object detection system using YOLOv5 architecture, trained on domain-specific datasets. Includes data augmentation, custom annotations, and performance optimization for real-time inference. Deployed as both web application and mobile-ready API.",
    tags: ["CV", "DL", "Deployed"],
    tech: ["Python", "PyTorch", "OpenCV", "YOLOv5", "FastAPI"],
    image: "/project-images/yolo.jpg",
    notebooks: [
      "https://nbviewer.org/urls/raw.githubusercontent.com/example/yolo-training.ipynb"
    ],
    github: "https://github.com/example/object-detection",
    live: "https://object-detector.herokuapp.com",
    featured: true
  },
  {
    id: "recommendation-system",
    title: "Movie Recommendation Engine",
    description: "Hybrid recommendation system combining collaborative filtering and content-based approaches.",
    longDescription: "Advanced recommendation system that combines multiple approaches including collaborative filtering, content-based filtering, and matrix factorization. Implements deep learning embeddings and handles cold start problems with demographic and content features.",
    tags: ["ML", "Recommendation", "Notebook"],
    tech: ["Python", "Scikit-learn", "Surprise", "Streamlit", "MongoDB"],
    image: "/project-images/recommender.jpg",
    notebooks: [
      "https://nbviewer.org/urls/raw.githubusercontent.com/example/recommender.ipynb"
    ],
    github: "https://github.com/example/movie-recommender",
    live: "https://movie-rec.streamlit.app"
  },
  {
    id: "fraud-detection",
    title: "Credit Card Fraud Detection",
    description: "Machine learning system for detecting fraudulent credit card transactions with high accuracy.",
    longDescription: "Comprehensive fraud detection system handling imbalanced datasets using SMOTE, ensemble methods, and anomaly detection algorithms. Includes feature engineering, model interpretability with SHAP, and real-time scoring pipeline.",
    tags: ["ML", "Classification", "Notebook"],
    tech: ["Python", "Scikit-learn", "XGBoost", "SHAP", "Plotly"],
    image: "/project-images/fraud.jpg",
    notebooks: [
      "https://nbviewer.org/urls/raw.githubusercontent.com/example/fraud-detection.ipynb"
    ],
    github: "https://github.com/example/fraud-detection"
  }
];

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "All") return projects;
  return projects.filter(project => project.tags.includes(category));
};

export const searchProjects = (query: string, category: string = "All"): Project[] => {
  const filteredByCategory = getProjectsByCategory(category);
  if (!query.trim()) return filteredByCategory;
  
  const searchTerm = query.toLowerCase();
  return filteredByCategory.filter(project =>
    project.title.toLowerCase().includes(searchTerm) ||
    project.description.toLowerCase().includes(searchTerm) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    project.tech.some(tech => tech.toLowerCase().includes(searchTerm))
  );
};

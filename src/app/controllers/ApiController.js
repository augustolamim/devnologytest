import notebooksFile from '../data/notebooks.json';

class ApiController {
  //GET /api retrieves all notebooks
  async index(req, res) {    
    try {   
      return res.status(200).json({
        notebooksFile,
      });

    }
    catch (error) {   
      return res.status(500).json({ 
        error: 'There was an error when loading the data.', 
        stack: error.stack,
        local: 'api.index',
      });
    }
  }
}

export default new ApiController;
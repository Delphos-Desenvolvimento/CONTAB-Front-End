import api from './index';

interface Noticia {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  imageUrl: string;
}

const NoticesService = {
  // Buscar todas as notícias
  async getAll() {
    try {
      const response = await api.get<Noticia[]>('/notices');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar notícias:', error);
      throw error;
    }
  },

  // Buscar notícia por ID
  async getById(id: number) {
    try {
      const response = await api.get<Noticia>(`/notices/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar notícia com ID ${id}:`, error);
      throw error;
    }
  },

  // Criar nova notícia
  async create(noticia: Omit<Noticia, 'id'>) {
    try {
      const response = await api.post<Noticia>('/notices', noticia);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar notícia:', error);
      throw error;
    }
  },

  // Atualizar notícia existente
  async update(id: number, noticia: Partial<Noticia>) {
    try {
      const response = await api.put<Noticia>(`/notices/${id}`, noticia);
      return response.data;
    } catch (error) {
      console.error(`Erro ao atualizar notícia com ID ${id}:`, error);
      throw error;
    }
  },

  // Excluir notícia
  async delete(id: number) {
    try {
      await api.delete(`/notices/${id}`);
    } catch (error) {
      console.error(`Erro ao excluir notícia com ID ${id}:`, error);
      throw error;
    }
  },

  // Buscar notícias por categoria
  async getByCategory(category: string) {
    try {
      const response = await api.get<Noticia[]>('/notices', {
        params: { category }
      });
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar notícias da categoria ${category}:`, error);
      throw error;
    }
  }
};

export default NoticesService;
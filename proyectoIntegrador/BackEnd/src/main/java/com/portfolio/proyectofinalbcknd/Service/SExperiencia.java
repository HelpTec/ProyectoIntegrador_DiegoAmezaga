package com.portfolio.proyectofinalbcknd.Service;

import com.portfolio.proyectofinalbcknd.Entity.Experiencia;
import com.portfolio.proyectofinalbcknd.Repository.RExperiencia;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class SExperiencia {

    @Autowired
    RExperiencia rExperiencia;

    public List<Experiencia> list() {
        return rExperiencia.findAll();
    }

    public Optional<Experiencia> getOne(int id) {
        return rExperiencia.findById(id);
    }

    public Optional<Experiencia> getByNombreE(String nombreE) {
        return rExperiencia.findBynombreE(nombreE);
    }
    
    public void save(Experiencia exp){
        rExperiencia.save(exp);
    }
    
    public void delete(int id){
        rExperiencia.deleteById(id);
    }
    
    public boolean existById(int id){
        return rExperiencia.existsById(id);
    }
    
    public boolean existByNombreE(String nombreE){
        return rExperiencia.existBynombreE(nombreE);
    }
    
}

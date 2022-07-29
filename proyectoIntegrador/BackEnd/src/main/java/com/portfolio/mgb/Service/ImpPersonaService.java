
package com.portfolio.mgb.Service;

import com.portfolio.mgb.Entity.Persona;
import org.springframework.stereotype.Service;
import com.portfolio.mgb.Interface.IPersonaInterface;
import com.portfolio.mgb.Repository.IPersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class ImpPersonaService implements IPersonaInterface{

    @Autowired IPersonaRepository ipersonaRepository;
    
    @Override
    public List<Persona> getPersona() {
        List<Persona> persona = ipersonaRepository.findAll();
        return persona;     
    }

    @Override
    public void savePersona(Persona persona) {
        ipersonaRepository.save(persona);
    }

    @Override
    public void deletePersona(Long id) {
        ipersonaRepository.deleteById(id);
    }

    @Override
    public Persona findPersona(Long id) {
        Persona persona = ipersonaRepository.findById(id).orElse(null);
        return persona;
    }
    
    
}

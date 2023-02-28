import React from "react";

const ProjectForm = () => {
  return (
    <form>
      <div>
        <input type="text" placeholder="Insira o nome do projeto" />
      </div>
      <div>
        <input type="number" placeholder="Insira o orçamento total " />
      </div>
      <div>
        <select name="category_id">
          <option selected disabled>
            Selecione a categoria
          </option>
        </select>
      </div>
    </form>
  );
};

export default ProjectForm;

import styled from "styled-components";
import { buttonStyleNormal } from "./mixins";

export const Btn = styled.button`
  height: 32px;
  padding: 0 24px;
  font-size: 0.875rem;
  text-align: center;
  white-space: nowrap;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${props => props.sucesso && 
    buttonStyleNormal(props.theme.colors.green, props.theme.colors.green, props.theme.colors.white)
  }

  ${props => props.erro && 
    buttonStyleNormal(props.theme.colors.red, props.theme.colors.green, props.theme.colors.white)
  }
`;
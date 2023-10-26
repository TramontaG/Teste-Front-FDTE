import { Pokemon, PokemonPropertyArray } from "src/Models/Pokemon";
import { PokeContext } from "../../Contexts/PokeContext";
import {
  HorizontalContainer,
  TextInput,
  Label,
  HorizontalDivider,
  Container,
  Dropdown,
  PokemonTypeOption,
} from "./styles";

import PokemonTypes from "src/strings/PokemonTypes.json";
import { ForEach } from "src/Components/ForEach";
import { Render } from "src/Components/Render";
import { useEffect } from "react";

export const CreateOrEditPokemon = () => {
  const {
    selectedPokemon: [pokemon, setPokemon],
  } = PokeContext.useContext();

  const updateProperty =
    <Key extends keyof Pokemon>(
      propertyName: Key
    ): React.ChangeEventHandler<HTMLInputElement> =>
    (e) => {
      const newValue = e.target.value as Pokemon[Key];
      setPokemon((oldPokemon) => ({
        ...oldPokemon!,
        [propertyName]: newValue,
      }));
    };

  const addValueToPropertyArray =
    (
      key: PokemonPropertyArray,
      index: number
    ): React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> =>
    (e) => {
      const copyArray = [...pokemon![key]];
      copyArray[index] = e.target.value;

      setPokemon((oldPokemon) => ({
        ...oldPokemon!,
        [key]: copyArray,
      }));
    };

  // I'm pretty sure there might be a better way to do this
  // However I still don't know how.
  let nameInput: HTMLInputElement | null = null;
  let hpInput: HTMLInputElement | null = null;
  let weightInput: HTMLInputElement | null = null;
  let heightInput: HTMLInputElement | null = null;
  let type0: HTMLSelectElement | null = null;
  let type1: HTMLSelectElement | null = null;
  let ability0: HTMLInputElement | null = null;
  let ability1: HTMLInputElement | null = null;
  let ability2: HTMLInputElement | null = null;
  let ability3: HTMLInputElement | null = null;

  useEffect(() => {
    nameInput!.value = pokemon!.name;
    hpInput!.value = (pokemon!.hp || "").toString();
    weightInput!.value = (pokemon!.weight || "").toString();
    heightInput!.value = (pokemon!.height || "").toString();
    type0!.value = pokemon!.types[0] || "_default";

    ability0!.value = pokemon!.abilities[0] || "";
    ability1!.value = pokemon!.abilities[1] || "";
    ability2!.value = pokemon!.abilities[2] || "";
    ability3!.value = pokemon!.abilities[3] || "";

    // This has to be wrapped in an if statement because
    // the select for the second doesnt exists if the pokemon
    // has only one type
    if (pokemon!.types.length > 0) {
      type1!.value = pokemon!.types[1] || "_default";
    }
  }, [pokemon]);

  return (
    <Container>
      <Label>Nome</Label>
      <TextInput
        placeholder="Nome"
        onChange={updateProperty("name")}
        ref={(ref) => (nameInput = ref)}
      />

      <Label>HP</Label>
      <TextInput
        placeholder="HP"
        type="number"
        onChange={updateProperty("hp")}
        ref={(ref) => (hpInput = ref)}
      />

      <Label>Peso</Label>
      <TextInput
        placeholder="PESO"
        type="number"
        onChange={updateProperty("weight")}
        ref={(ref) => (weightInput = ref)}
      />

      <Label>Altura</Label>
      <TextInput
        placeholder="ALTURA"
        type="number"
        onChange={updateProperty("height")}
        ref={(ref) => (heightInput = ref)}
      />

      <HorizontalContainer>
        <HorizontalDivider />
        <Label>Tipo</Label>
        <HorizontalDivider />
      </HorizontalContainer>

      <Label>Tipo</Label>
      <Dropdown
        ref={(ref) => (type0 = ref)}
        onChange={addValueToPropertyArray("types", 0)}
      >
        <PokemonTypeOption disabled selected value="_default">
          Selecione o(s) tipo(s)
        </PokemonTypeOption>
        <ForEach
          data={Object.values(PokemonTypes)}
          render={(type) => (
            <PokemonTypeOption value={type}>
              {type.toUpperCase()}
            </PokemonTypeOption>
          )}
        />
      </Dropdown>

      <Render when={pokemon!.types.length > 0}>
        <Dropdown
          ref={(ref) => (type1 = ref)}
          onChange={addValueToPropertyArray("types", 0)}
        >
          <PokemonTypeOption disabled selected value="_default">
            Selecione o(s) tipo(s)
          </PokemonTypeOption>
          <ForEach
            data={Object.values(PokemonTypes)}
            render={(type) => (
              <PokemonTypeOption value={type}>
                {type.toUpperCase()}
              </PokemonTypeOption>
            )}
          />
        </Dropdown>
      </Render>

      <HorizontalContainer>
        <HorizontalDivider />
        <Label>Habilidades</Label>
        <HorizontalDivider />
      </HorizontalContainer>

      <TextInput
        placeholder="Habilidade 1"
        ref={(ref) => (ability0 = ref)}
        onChange={addValueToPropertyArray("abilities", 0)}
      />
      <TextInput
        placeholder="Habilidade 2"
        ref={(ref) => (ability1 = ref)}
        onChange={addValueToPropertyArray("abilities", 1)}
      />
      <TextInput
        placeholder="Habilidade 3"
        ref={(ref) => (ability2 = ref)}
        onChange={addValueToPropertyArray("abilities", 2)}
      />
      <TextInput
        placeholder="Habilidade 4"
        ref={(ref) => (ability3 = ref)}
        onChange={addValueToPropertyArray("abilities", 4)}
      />
    </Container>
  );
};

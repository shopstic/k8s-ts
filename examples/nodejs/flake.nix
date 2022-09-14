{
  description = "Kubernetes API Fetch Example";

  inputs = {
    hotPot.url = "github:shopstic/nix-hot-pot";
    flakeUtils.follows = "hotPot/flakeUtils";
    nixpkgs.follows = "hotPot/nixpkgs";
  };

  outputs = { self, hotPot, nixpkgs, flakeUtils }:
    flakeUtils.lib.eachSystem [ "x86_64-linux" "aarch64-linux" "aarch64-darwin" ] (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      rec {
        devShell = pkgs.mkShellNoCC {
          buildInputs = builtins.attrValues {
            inherit (pkgs)
              nodejs-18_x
              ;
          };
        };
        defaultPackage = devShell.inputDerivation;
      }
    );
}

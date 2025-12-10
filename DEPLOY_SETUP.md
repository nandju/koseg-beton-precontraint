# Configuration du déploiement automatique

## Secrets GitHub à configurer

Pour activer le déploiement automatique, ajoutez ces secrets dans votre dépôt GitHub :

1. Allez dans **Settings** → **Secrets and variables** → **Actions**
2. Cliquez sur **New repository secret**
3. Ajoutez les trois secrets suivants :

### FTP_SERVER

```
koseg-ci.com
```

### FTP_USERNAME

```
ftp@koseg-ci.com
```

### FTP_PASSWORD

```
Dr#Wanq2+ARa#7WM
```

## Test de connexion FTP

Pour tester la connexion FTP localement :

```bash
# Installation de lftp (optionnel)
brew install lftp  # macOS
# ou
sudo apt-get install lftp  # Linux

# Test de connexion
lftp -u ftp@koseg-ci.com,Dr#Wanq2+ARa#7WM koseg-ci.com
```

## Structure de déploiement

Le workflow déploie automatiquement vers :

- **Dossier serveur** : `/home/c2651735c/website/`
- **Fichiers déployés** :
  - `.next/` (build Next.js)
  - `public/` (assets statiques)
  - `package.json` et `package-lock.json`
  - `server.js` (serveur Node.js)
  - `restart.txt` (déclencheur de redémarrage)

## Redémarrage automatique

Le serveur surveille le fichier `restart.txt` et redémarre automatiquement lorsqu'il est modifié. Le workflow met à jour ce fichier après chaque déploiement.

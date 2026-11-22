"""Ajustes del proyecto Android generado por Capacitor:
- Pantalla horizontal (gira con el sensor)
- Pantalla completa inmersiva (oculta barra de estado y de navegación)
- Pantalla siempre encendida mientras juegas
- Permiso de vibración
"""
import glob, re, sys

man_path = 'android/app/src/main/AndroidManifest.xml'
man = open(man_path, encoding='utf-8').read()
if 'screenOrientation' not in man:
    man = man.replace('android:name=".MainActivity"', 'android:name=".MainActivity"\n            android:screenOrientation="sensorLandscape"', 1)
if 'android.permission.VIBRATE' not in man:
    man = man.replace('<uses-permission android:name="android.permission.INTERNET" />',
                      '<uses-permission android:name="android.permission.INTERNET" />\n    <uses-permission android:name="android.permission.VIBRATE" />', 1)
open(man_path, 'w', encoding='utf-8').write(man)

acts = glob.glob('android/app/src/main/java/**/MainActivity.java', recursive=True)
if not acts:
    sys.exit('No se encontró MainActivity.java')
act = acts[0]
pkg = re.search(r'^package\s+([\w.]+);', open(act, encoding='utf-8').read(), re.M).group(1)
open(act, 'w', encoding='utf-8').write(f'''package {pkg};

import android.os.Bundle;
import android.view.WindowManager;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {{
    @Override
    public void onCreate(Bundle savedInstanceState) {{
        super.onCreate(savedInstanceState);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        ocultarBarras();
    }}

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {{
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) ocultarBarras();
    }}

    private void ocultarBarras() {{
        WindowCompat.setDecorFitsSystemWindows(getWindow(), false);
        WindowInsetsControllerCompat c = WindowCompat.getInsetsController(getWindow(), getWindow().getDecorView());
        c.hide(WindowInsetsCompat.Type.systemBars());
        c.setSystemBarsBehavior(WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE);
    }}
}}
''')
print('Ajustes aplicados:', man_path, act)

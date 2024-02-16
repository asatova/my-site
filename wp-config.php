<?php

define('WP_CACHE', true);

/**

 * The base configuration for WordPress

 *

 * The wp-config.php creation script uses this file during the installation.

 * You don't have to use the web site, you can copy this file to "wp-config.php"

 * and fill in the values.

 *

 * This file contains the following configurations:

 *

 * * Database settings

 * * Secret keys

 * * Database table prefix

 * * ABSPATH

 *

 * @link https://wordpress.org/documentation/article/editing-wp-config-php/

 *

 * @package WordPress

 */


// ** Database settings - You can get this info from your web host ** //

/** The name of the database for WordPress */

define( 'DB_NAME', 'x_u_12457_zarnigor-asatova' );


/** Database username */

define( 'DB_USER', 'x_u_12457_zarnigor-asatova' );


/** Database password */

define( 'DB_PASSWORD', 'tU8eB8mB8v' );


/** Database hostname */

define( 'DB_HOST', 'localhost' );


/** Database charset to use in creating database tables. */

define( 'DB_CHARSET', 'utf8mb4' );


/** The database collate type. Don't change this if in doubt. */

define( 'DB_COLLATE', '' );


/**#@+

 * Authentication unique keys and salts.

 *

 * Change these to different unique phrases! You can generate these using

 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.

 *

 * You can change these at any point in time to invalidate all existing cookies.

 * This will force all users to have to log in again.

 *

 * @since 2.6.0

 */

define( 'AUTH_KEY',         'enq .Ca=R<,y#:JKFNsfvv7*._<=~L^k-~CH* :V^w%2/[o>9*5ROuOz `=8[L]=' );

define( 'SECURE_AUTH_KEY',  'dBb07ih00~C<M5I{Sbg!Ow=<RSD<iy7$$g2~9kTNs6PQ(o*rx)>l@-NI-JcddV!]' );

define( 'LOGGED_IN_KEY',    'gQ!v^X,-yer<3ONpo3e6=X8lw]J$Wf2@+>#5Tc__%lUs`,/nph.hKcsD*(-`e%M/' );

define( 'NONCE_KEY',        '?S0cdDF{u{)6FG,74yhA0B_^;+t5IhUJndY*[~4BBABC7>blQ*ko6;v4NN$Dmvgu' );

define( 'AUTH_SALT',        'vcZMIR60$HG=#uqJw;]*Vg%Xe4!*8;((/,]4o#v ]K 6U44%y5Of-3]TKxdx} 1B' );

define( 'SECURE_AUTH_SALT', 'N!wP9_pUxE$!?z)qwQf:cu$[,8ik[Km,:%@SG#?ki.JQ;H{TS#/{Cg=5d o%::$5' );

define( 'LOGGED_IN_SALT',   'd1t+8PZCta]4!JY~ar>Bg-On]7v+pX>PNS{yy6w: L_g`a~;-PuHH(IVI&:6X&mW' );

define( 'NONCE_SALT',       'r`!yw95&}A7DDbixeu|gG=%%Y_Wmtx=n{wO`:s0[ q`j-}uaf7H#3N8,/UE`C]mO' );


/**#@-*/


/**

 * WordPress database table prefix.

 *

 * You can have multiple installations in one database if you give each

 * a unique prefix. Only numbers, letters, and underscores please!

 */

define( 'WP_SITEURL', 'https://zarnigor-asatova.uz' );
define( 'WP_HOME', 'https://zarnigor-asatova.uz' );
$table_prefix = 'wp_';


/**

 * For developers: WordPress debugging mode.

 *

 * Change this to true to enable the display of notices during development.

 * It is strongly recommended that plugin and theme developers use WP_DEBUG

 * in their development environments.

 *

 * For information on other constants that can be used for debugging,

 * visit the documentation.

 *

 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/

 */

define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */




/* That's all, stop editing! Happy publishing. */


/** Absolute path to the WordPress directory. */

if ( ! defined( 'ABSPATH' ) ) {

	define( 'ABSPATH', __DIR__ . '/' );

}


/** Sets up WordPress vars and included files. */

require_once ABSPATH . 'wp-settings.php';


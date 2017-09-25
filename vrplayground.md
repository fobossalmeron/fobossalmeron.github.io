---
layout: default
title: VR Playground
vr: true
---

<div class="content">
{% assign proyectosorden = site.vrportafolio | sort:"order" %}
	{% for proyecto in proyectosorden %}
	<figure>
      <a href="{{ proyecto.url }}">
				<img src="/images{{ proyecto.url }}{{ proyecto.cover }}" alt="Rodrigo Salmeron | {{ proyecto.title }}">
				{% if proyecto.secondcover %}
	        <img class="secondcover" src="/images{{ proyecto.url }}{{ proyecto.secondcover }}" alt="Rodrigo Salmeron | {{ page.title }}">
	      {% endif %}
			</a>
    <figcaption>
	    <h2>{{ proyecto.title }}</h2>
		<p><em>proyecto:</em> {{ proyecto.description }}</p>
		<a href="{{ proyecto.url }}">Ver proyecto</a>
    </figcaption>
    </figure>
{% endfor %}
</div>
